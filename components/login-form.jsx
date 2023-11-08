import React from 'react'

function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full p-5">
    <div className="max-w-sm w-full p-6 space-y-8 bg-white rounded shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-rose-500">Login</h2>
      </div>
      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full border rounded border-gray-300 h-[40px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full border rounded border-gray-300 h-[40px] shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            />
          </div>
          <div className="text-sm mt-4">
              <a href="#" className="font-medium text-rose-600 hover:text-rose-500 hover:underline">
                Forgot your password?
              </a>
            </div>
        </div>
        <div className="flex items-center justify-between">
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default LoginForm