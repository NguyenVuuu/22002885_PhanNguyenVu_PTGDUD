import { useEffect, useState } from "react";
import axios from "axios";
import { fetchAllUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import logoDashboard from "../assets/img/logo-dashboard.svg";
import available from "../assets/img/available.svg";
import iconUser from "../assets/img/user1.jpg";
import question from "../assets/img/Question.svg";
import bell from "../assets/img/bell.svg";
import SquaresFour from "../assets/img/phosphor-SquaresFour-Outlined.svg";

// SVG Icons as components
const IconHome = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconFolder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const IconUsers = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconChart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const IconMessage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const IconLayers = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const IconSearch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// const IconBell = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
//     <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//   </svg>
// );

// const IconHelp = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10"></circle>
//     <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
//     <line x1="12" y1="17" x2="12.01" y2="17"></line>
//   </svg>
// );

// const IconUser = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//     <circle cx="12" cy="7" r="4"></circle>
//   </svg>
// );

const IconEdit = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const IconChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const IconDollar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const IconUser2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const Dashboard = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const tableData = [
    {
      id: 1,
      name: "Elizabeth Lee",
      avatar: iconUser,
      company: "AvatarSystems",
      value: "$359",
      date: "10/07/2023",
      status: "New",
    },
    {
      id: 2,
      name: "Carlos Garcia",
      avatar: iconUser,
      company: "SmoothShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
    },
    {
      id: 3,
      name: "Elizabeth Bailey",
      avatar: iconUser,
      company: "Prime Time Telecom",
      value: "$664",
      date: "08/08/2023",
      status: "In-progress",
    },
    {
      id: 4,
      name: "Ryan Brown",
      avatar: iconUser,
      company: "OmniTech Corporation",
      value: "$541",
      date: "11/08/2023",
      status: "In-progress",
    },
    {
      id: 5,
      name: "Ryan Young",
      avatar: iconUser,
      company: "DataStream Inc",
      value: "$769",
      date: "01/09/2023",
      status: "Completed",
    },
    {
      id: 6,
      name: "Hailey Adams",
      avatar: iconUser,
      company: "FlowRush",
      value: "$922",
      date: "10/10/2023",
      status: "Completed",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return "text-blue-500 bg-blue-50 px-2 py-1 rounded";
      case "In-progress":
        return "text-yellow-500 bg-yellow-50 px-2 py-1 rounded";
      case "Completed":
        return "text-green-500 bg-green-50 px-2 py-1 rounded";
      default:
        return "";
    }
  };

  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    // callAPI
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await fetchAllUser();
    if (res && res.data) {
      setListUsers(res.data);
    }
  };

  // const getUsers = async () => {
  //   let res = await fetchAllUser();
  //   console.log("res: ", res);
  // };

  console.log(listUsers);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 flex items-center">
          <div className="cursor-pointer">
            <img src={logoDashboard} alt="" />
          </div>
        </div>

        <nav className="mt-6">
          <div className="px-4 mb-4">
            <button className="w-full bg-pink-500 text-white flex items-center px-4 py-3 rounded">
              <span className="mr-2">
                <IconHome />
              </span>
              <span>Dashboard</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span className="mr-2">
                <IconFolder />
              </span>
              <span>Projects</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span className="mr-2">
                <IconUsers />
              </span>
              <span>Teams</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span className="mr-2">
                <IconChart />
              </span>
              <span>Analytics</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span className="mr-2">
                <IconMessage />
              </span>
              <span>Messages</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span className="mr-2">
                <IconLayers />
              </span>
              <span>Integrations</span>
            </button>
          </div>
        </nav>

        {/* V2.0 Promo Card */}
        <div className="mx-4 mt-10 bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-center mb-3">
            <img src={available} alt="Upgrade illustration" className="h-32" />
          </div>
          <h3 className="font-bold text-center">V2.0 is available</h3>
          <div className="mt-3">
            <button className="w-full bg-white text-blue-500 border border-blue-300 py-2 rounded text-sm font-medium">
              Try now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <IconSearch />
              </div>
            </div>

            <button className="p-2 text-gray-400 hover:text-gray-600">
              <img className="w-5" src={bell} alt="" />
              {/* <IconBell /> */}
            </button>

            <button className="p-2 text-gray-400 hover:text-gray-600">
              {/* <IconHelp /> */}
              <img className="w-5" src={question} alt="" />
            </button>

            <button className="p-1 rounded-full bg-pink-100">
              <div className="text-pink-500">
                <img className="w-5" src={iconUser} alt="" />
              </div>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <span className="bg-pink-100 text-pink-500 p-1 rounded mr-2">
                <img className="overview" src={SquaresFour} alt="" />
              </span>
              Overview
            </h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Turnover Card */}
              <div className="bg-pink-50 rounded-lg p-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">Turnover</span>
                  <button className="text-pink-500 p-1 rounded hover:bg-pink-100">
                    <IconHome />
                  </button>
                </div>
                <div className="text-3xl font-bold mb-2">$92,405</div>
                <div className="flex items-center text-green-500 text-sm">
                  <span>↑ 5.39%</span>
                  <span className="text-gray-500 ml-1">period of change</span>
                </div>
              </div>

              {/* Profit Card */}
              <div className="bg-blue-50 rounded-lg p-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">Profit</span>
                  <button className="text-blue-500 p-1 rounded hover:bg-blue-100">
                    <IconDollar />
                  </button>
                </div>
                <div className="text-3xl font-bold mb-2">$32,218</div>
                <div className="flex items-center text-green-500 text-sm">
                  <span>↑ 5.36%</span>
                  <span className="text-gray-500 ml-1">period of change</span>
                </div>
              </div>

              {/* New Customer Card */}
              <div className="bg-blue-50 rounded-lg p-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">New customer</span>
                  <button className="text-blue-500 p-1 rounded hover:bg-blue-100">
                    <IconUser2 />
                  </button>
                </div>
                <div className="text-3xl font-bold mb-2">298</div>
                <div className="flex items-center text-green-500 text-sm">
                  <span>↑ 6.84%</span>
                  <span className="text-gray-500 ml-1">period of change</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Report Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <span className="bg-pink-100 text-pink-500 p-1 rounded mr-2">
                  <IconFolder />
                </span>
                Detailed report
              </h2>

              <div className="flex space-x-2">
                <button className="border border-gray-200 rounded px-3 py-1 text-sm font-medium flex items-center">
                  <span className="mr-1">Import</span>
                </button>
                <button className="border border-gray-200 rounded px-3 py-1 text-sm font-medium flex items-center">
                  <span className="mr-1">Export</span>
                </button>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {/* <th className="w-12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                      />
                    </th> */}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src={row.avatar} alt={row.name} />
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {row.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.value}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={getStatusClass(row.status)}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-gray-400 hover:text-gray-600">
                          <IconEdit />
                        </button>
                      </td>
                    </tr>
                  ))} */}

                  {listUsers &&
                    listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                      return (
                        <tr key={`users-${index}`} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                                <img
                                  src={item.avatar}
                                  alt={item.customerName}
                                />
                              </div>
                              <div className="text-sm font-medium text-gray-900">
                                {item.customerName}
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.company}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.orderValue}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.oderDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={getStatusClass(item.status)}>
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-gray-400 hover:text-gray-600">
                              <IconEdit />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>

              {/* Pagination */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
