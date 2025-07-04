import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a 
            href="/privacy" 
            className="text-sm hover:text-white transition-colors duration-200"
          >
            Privacy
          </a>
          <a 
            href="/terms" 
            className="text-sm hover:text-white transition-colors duration-200"
          >
            Terms
          </a>
          <a 
            href="/contact" 
            className="text-sm hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer