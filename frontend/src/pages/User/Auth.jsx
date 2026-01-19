// // // import { useState } from "react"
// // // import { useNavigate } from "react-router-dom"
// // // import { useAuth } from "../../context/AuthContext"
// // // import ianAvatar from "../../assets/ian.png"
// // // import jamesAvatar from "../../assets/james.png"
// // // import kelvinAvatar from "../../assets/kelvin.png"
// // // import brianAvatar from "../../assets/brian.png"

// // // const tabs = [
// // //   { key: "login", label: "Log In" },
// // //   { key: "signup", label: "Create Account" },
// // //   { key: "forgot", label: "Forgot Password" },
// // // ]

// // // const Auth = () => {
// // //   const { login } = useAuth()
// // //   const navigate = useNavigate()
// // //   const [activeTab, setActiveTab] = useState("login")
// // //   const [form, setForm] = useState({ name: "", email: "", password: "", avatarUrl: "" })
// // //   const [status, setStatus] = useState("")
// // //   const [selectedAvatar, setSelectedAvatar] = useState(ianAvatar)

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target
// // //     setForm((prev) => ({ ...prev, [name]: value }))
// // //   }

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()
// // //     setStatus("")

// // //     if (!form.email || (!form.password && activeTab !== "forgot")) {
// // //       setStatus("Please fill in all required fields.")
// // //       return
// // //     }

// // //     if (activeTab === "forgot") {
// // //       setStatus("Password reset instructions will be sent to your email.")
// // //       return
// // //     }

// // //     await login({
// // //       name: activeTab === "signup" ? form.name : form.name || form.email.split("@")[0],
// // //       email: form.email,
// // //       avatarUrl: form.avatarUrl || selectedAvatar,
// // //     })

// // //     navigate("/dashboard")
// // //   }

// // //   return (
// // //     <section className="max-w-xl mx-auto px-9 py-40">
// // //       <h2 className="text-3xl font-semibold text-slate-800 mb-6">Account Access</h2>

// // //       <div className="flex gap-2 mb-6">
// // //         {tabs.map((tab) => (
// // //           <button
// // //             key={tab.key}
// // //             onClick={() => {
// // //               setActiveTab(tab.key)
// // //               setStatus("")
// // //             }}
// // //             className={`rounded-full px-4 py-2 text-sm font-medium border ${
// // //               activeTab === tab.key
// // //                 ? "bg-orange-500 text-white border-orange-500"
// // //                 : "bg-white text-slate-700 border-slate-200 hover:border-orange-300"
// // //             } transition`}
// // //           >
// // //             {tab.label}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
// // //         {activeTab === "signup" && (
// // //           <div className="flex flex-col gap-2">
// // //             <label className="text-sm text-slate-600">Firstname</label>
// // //             <input
// // //               type="text"
// // //               name="name"
// // //               value={form.name}
// // //               onChange={handleChange}
// // //               placeholder="Firstname"
// // //               className="w-full rounded-lg border border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
// // //               required
// // //             />
// // //           </div>
// // //         )}

// // //       <div className="flex flex-col gap-2">
// // //         <label htmlFor="Surname" className="text-sm text-slate-600">Surname</label>
// // //         <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Surname"
// // //         className="w-full rounded-lg border border-b-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
// // //         required
// // //         />
// // //       </div>


// // //         <div className="flex flex-col gap-2">
// // //           <label className="text-sm text-slate-600">Email</label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={form.email}
// // //             onChange={handleChange}
// // //             placeholder="you@example.com"
// // //             className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
// // //             required
// // //           />
// // //         </div>

// // //         {activeTab !== "forgot" && (
// // //           <div className="flex flex-col gap-2">
// // //             <label className="text-sm text-slate-600">Password</label>
// // //             <input
// // //               type="password"
// // //               name="password"
// // //               value={form.password}
// // //               onChange={handleChange}
// // //               placeholder="••••••••"
// // //               className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
// // //               required
// // //             />
// // //           </div>
// // //         )}

// // //         {activeTab !== "forgot" && (
// // //           <div className="flex flex-col gap-2">
// // //             <label className="text-sm text-slate-600">Avatar</label>
// // //             <div className="grid grid-cols-4 gap-3">
// // //               {[ianAvatar, jamesAvatar, kelvinAvatar, brianAvatar].map((avatar) => (
// // //                 <button
// // //                   key={avatar}
// // //                   type="button"
// // //                   onClick={() => setSelectedAvatar(avatar)}
// // //                   className={`rounded-xl border p-2 hover:border-orange-400 transition ${
// // //                     selectedAvatar === avatar ? "border-orange-500 ring-2 ring-orange-200" : "border-slate-200"
// // //                   }`}
// // //                 >
// // //                   <img src={avatar} alt="avatar option" className="h-14 w-14 object-cover rounded-lg mx-auto" />
// // //                 </button>
// // //               ))}
// // //             </div>
// // //             <input
// // //               type="url"
// // //               name="avatarUrl"
// // //               value={form.avatarUrl}
// // //               onChange={handleChange}
// // //               placeholder="Or paste an image URL"
// // //               className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
// // //             />
// // //           </div>
// // //         )}

// // //         {status && <p className="text-sm text-orange-600">{status}</p>}

// // //         <button
// // //           type="submit"
// // //           className="w-full rounded-lg bg-orange-500 text-white py-3 font-semibold hover:bg-orange-600 transition"
// // //         >
// // //           {activeTab === "login" && "Log In"}
// // //           {activeTab === "signup" && "Create Account"}
// // //           {activeTab === "forgot" && "Send Reset Link"}
// // //         </button>
// // //       </form>
// // //     </section>
// // //   )
// // // }

// // // export default Auth

// //  import { useState } from "react";
// // import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

// // const Auth = () => {
 
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [error, setError] = useState("");

// //   const handlePasswordChange = (e) => {
// //     const value = e.target.value;
// //     setPassword(value);

// //     // Validation Logic
// //     const hasUppercase = /[A-Z]/.test(value);
// //     const hasLowercase = /[a-z]/.test(value);
// //     const hasNumber = /[0-9]/.test(value);

// //     if (value.length > 0 && (!hasUppercase || !hasLowercase || !hasNumber)) {
// //       setError("Password must include uppercase, lowercase, and a number.");
// //     } else {
// //       setError("");
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl py-30 px-5">
// //       <h2 className="text-xl font-bold mb-9">Create Account</h2>
      
// //       <div className="space-y-4">



// // {/* first N */}
// // <div className="flex flex-col gap-2">  

// //         <label className="text-sm text-slate-600">Firstname</label>
// //           <input
// //               type="text"
// //               name="name"
// //               placeholder="Firstname"
// //               className="w-full rounded-lg border border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
// //               required
// //             />
// //           </div>

// //           {/* SurN */}

// //       <div className="flex flex-col gap-2">
// //          <label htmlFor="Surname" className="text-sm text-slate-600">Surname</label>
// //         <input type="text" name="name"  placeholder="Surname"
// //         className="w-full rounded-lg border border-b-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
// //         required
// //         />
// //       </div>





// //         {/* Email Input */}
// //         <div>
// //           <label className="block text-sm font-medium text-slate-700">Email Address</label>
// //           <input 
// //             type="email" 
// //             placeholder="juice@fresh.com"
// //             className="w-full border p-2 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
// //           />
// //         </div>

// //         {/* Password Input with Side Eye */}
// //         <div className="relative">
// //           <label className="block text-sm font-medium text-slate-700">Password</label>
// //           <input
// //             type={showPassword ? "text" : "password"}
// //             value={password}
// //             onChange={handlePasswordChange}
// //             className={`w-full border p-2 rounded-md outline-none focus:ring-2 ${
// //               error ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-orange-400'
// //             }`}
// //           />
// //           {/* Toggle Button */}
// //           <button
// //             type="button"
// //             onClick={() => setShowPassword(!showPassword)}
// //             className="absolute right-3 top-8 text-xl text-slate-400 hover:text-orange-500"
// //           >
// //             {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
// //           </button>
// //         </div>

// //         {/* Error Message */}
// //         {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

// //         <button className="w-full bg-orange-500 text-white py-2 rounded-md font-bold hover:bg-orange-600">
// //           Sign Up
// //         </button>
      
// //       </div>
// //     </div>
// //   );
// // };


// // export default Auth

// import { useState } from "react";
// import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

// const Auth = () => {
//   const [firstName, setFirstName] = useState(""); // 2. State for names
//   const [surname, setSurname] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
  
//   const navigate = useNavigate(); // Initialize navigation

//   // Helper: Get initials from names
//   const initials = (firstName.charAt(0) + surname.charAt(0)).toUpperCase();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     if (!error && password.length > 0) {
//       // In a real app, you'd send data to your Express server here
//       console.log("User Registered!");
//       navigate("/dashboard"); // 3. Redirect to Dashboard
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      
//       {/* 4. DYNAMIC AVATAR SECTION */}
//       <div className="flex flex-col items-center mb-6">
//         <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-inner">
//           {initials || "?"} 
//         </div>
//         <p className="text-sm text-slate-500 mt-2">Your Profile Preview</p>
//       </div>

//       <h2 className="text-xl font-bold mb-6 text-center">Create Account</h2>
      
//       <form onSubmit={handleSignUp} className="space-y-4">
//         <div className="flex gap-4">
//           <div className="flex flex-col gap-2 w-1/2">  
//             <label className="text-sm text-slate-600">Firstname</label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)} // Capture input
//               placeholder="Firstname"
//               className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>

//           <div className="flex flex-col gap-2 w-1/2">
//             <label className="text-sm text-slate-600">Surname</label>
//             <input 
//               type="text" 
//               value={surname}
//               onChange={(e) => setSurname(e.target.value)} // Capture input
//               placeholder="Surname"
//               className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>
//         </div>

//         {/* ... (Email and Password inputs remain the same) ... */}

//         <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600 transition">
//           Sign Up & Explore
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Auth;


import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, password: value }));
    
    // Validation Logic
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    
    if (value.length > 0 && (!hasUppercase || !hasLowercase || !hasNumber)) {
      setError("Password must include uppercase, lowercase, and a number.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    if (!isLogin && (!formData.firstname || !formData.surname)) {
      setError("First name and surname are required");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      if (isLogin) {
        // Login
        const success = login(formData.email, formData.password);
        if (success) {
          navigate("/dashboard");
        } else {
          setError("Invalid email or password");
        }
      } else {
        // Register
        const success = register({
          name: `${formData.firstname} ${formData.surname}`,
          email: formData.email,
          password: formData.password
        });
        if (success) {
          navigate("/dashboard");
        } else {
          setError("Email already exists");
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-gray-600 mb-6">
          {isLogin 
            ? "Sign in to access your juice orders" 
            : "Join us for fresh juice deliveries"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name - Only for Registration */}
          {!isLogin && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required={!isLogin}
              />
            </div>
          )}

          {/* Surname - Only for Registration */}
          {!isLogin && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder="Enter your surname"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required={!isLogin}
              />
            </div>
          )}

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="juice@fresh.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="relative flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className={`w-full rounded-lg border px-4 py-3 pr-12 outline-none focus:ring-2 ${
                error ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-orange-400'
              }`}
              required
            />
            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-xl text-slate-400 hover:text-orange-500"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-yellow-600 transition-all shadow-md hover:shadow-lg"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Toggle Login/Register */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setFormData({
                  firstname: "",
                  surname: "",
                  email: "",
                  password: ""
                });
              }}
              className="ml-2 text-orange-500 font-semibold hover:text-orange-600"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;


