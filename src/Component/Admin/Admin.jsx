import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
const API_URL = import.meta.env.VITE_BASE_URL;
import Navbar from "../Navbar/Navbar";
import Intro from "./AdminIntro"
import Adminpic from "../../assets/edusity_assets/Admin.png"
import "./Admin.css"
import "./../tailwindcss.css"
const AdminUsers = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const fetchUsers = () => {
    if (!token) return;
    setLoading(true);
    axios
      .get(`${API_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUsers(res.data || []);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load users. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const roles = React.useMemo(() => {
    const set = new Set(users.map((u) => (u.role || "").toLowerCase()).filter(Boolean));
    return Array.from(set);
  }, [users]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = users;
    if (q) {
      list = list.filter((u) =>
        [u.username, u.email, u.department, u.class_group, u.matric_num]
          .map((v) => (v || "").toString().toLowerCase())
          .some((v) => v.includes(q))
      );
    }
    if (roleFilter !== "all") {
      list = list.filter((u) => (u.role || "").toLowerCase() === roleFilter);
    }
    return list;
  }, [users, query, roleFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginated = React.useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage]);

  const totalActive = users.filter((u) => u.active_token).length;
  const totalAdmins = users.filter((u) => (u.role || "").toLowerCase() === "admin").length;

  return (
    <>
    <Navbar/>
    <Intro/>
    <div style={{marginTop:"10px"}} className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      <header className="mb-8 flex items-center justify-between" style={{padding:"15px"}}>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">User management overview</p>
        </div>
        <button
          onClick={fetchUsers}
          style={{backgroundColor:"#1c1c1e" , padding:"10px", borderRadius:"10px", color:"white" ,}}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
        >
          <span>↻</span>
          <span>Refresh</span>
        </button>
      </header>

      <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-[#1c1c1e] p-6 text-white shadow-lg">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">All Users</h2>
                <p className="text-sm text-gray-400">
                  {filtered.length} result{filtered.length === 1 ? "" : "s"} found
                </p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-500 sm:w-48"
                />
                <select
                  value={roleFilter}
                  onChange={(e) => {
                    setRoleFilter(e.target.value);
                    setPage(1);
                  }}
                  className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">All Roles</option>
                  {roles.map((r) => (
                    <option key={r} value={r} className="capitalize">
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-hidden">
              {error && (
                <div className="rounded-lg bg-red-900/50 p-4 text-sm text-red-300">{error}</div>
              )}

              {loading ? (
                <div className="p-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="mb-2 h-10 w-full animate-pulse rounded bg-gray-800" />
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div className="py-16 text-center text-gray-400">
                  <p className="text-lg font-medium">No users found</p>
                  <p className="text-sm">Try adjusting your search or filters.</p>
                </div>
              ) : (
                <div className="-mx-6 overflow-x-auto" style={{ height: "400px" }}>
                  <table className="min-w-full table-auto Expand">
                    <thead className="text-left text-xs text-gray-400" >
                      <tr>
                        {[ "ID", "Username", "Email", "Role", "Matric", "Dept", "Level", "Group", "Token", ].map((h) => (
                          <th key={h} className="px-6 py-3 font-medium tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {paginated.map((u) => (
                        <tr key={u.id} className="border-t border-gray-800 hover:bg-gray-800/50 md:w-100" >
                          <td className="px-6 py-4 text-gray-300">{u.id}</td>
                          <td className="px-6 py-4 font-medium text-white" >{u.username}</td>
                          <td className="px-6 py-4 text-gray-400" >{u.email || "—"}</td>
                          <td className="px-6 py-4 text-gray-300 capitalize" >{u.role || "—"}</td>
                          <td className="px-6 py-4 text-gray-300" >{u.matric_num || "—"}</td>
                          <td className="px-6 py-4 text-gray-300" >{u.department || "—"}</td>
                          <td className="px-6 py-4 text-gray-300" >{u.level || "—"}</td>
                          <td className="px-6 py-4 text-gray-300"  >{u.class_group || "—"}</td>
                          <td className="px-6 py-4">
                            {u.active_token ? (
                              <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                                Active
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-md bg-rose-500/10 px-2 py-1 text-xs font-medium text-rose-400 ring-1 ring-inset ring-rose-500/20">
                                Expired
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Pagination */}
            {!loading && filtered.length > pageSize && (
              <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                <div>
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="rounded-md bg-gray-800 px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-700"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded-md bg-gray-800 px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-700"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-2xl bg-green-300 p-6 shadow-lg" >
            <p className="text-sm font-medium text-green-900/70" style={{ textAlign:"center" }}>Total Users</p>
            <p className="mt-2 text-4xl font-bold text-green-900" style={{ textAlign:"center" }}>{users.length}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm font-medium text-gray-500" style={{ textAlign:"center" }}>Active Tokens</p>
            <p className="mt-2 text-4xl font-bold text-gray-900" style={{ textAlign:"center" }}>{totalActive}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm font-medium text-gray-500" style={{ textAlign:"center" }}>Admins</p>
            <p className="mt-2 text-4xl font-bold text-gray-900" style={{ textAlign:"center" }}>{totalAdmins}</p>
          </div>
        </div>
      </main>
    </div>
    </>
  );

};

export default AdminUsers;
