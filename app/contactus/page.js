export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center space-y-10">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>

      {/* Contact Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: Address, Email, Phone */}
        <div className="space-y-6 bg-white rounded-lg shadow-lg p-8">
          {/* Address */}
          <div className="border border-gray-300 rounded-md p-4">
            <h4 className="font-semibold text-gray-800 mb-1">📍 Address</h4>
            <p className="text-gray-600">
            NTT DATA Myanmar Co., Ltd. Yangon Head Office Building No.17, 1st & 2nd Floor, MICT Park, University Campus, Hlaing Township, Yangon, Republic of the Union of Myanmar.
            </p>
          </div>

          {/* Email & Phone - Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div className="border border-gray-300 rounded-md p-4">
              <h4 className="font-semibold text-gray-800 mb-1">✉️ Email</h4>
              <p className="text-blue-500">HR_NDMM@nttdata.com</p>
            </div>

            {/* Phone */}
            <div className="border border-gray-300 rounded-md p-4">
              <h4 className="font-semibold text-gray-800 mb-1">📞 Phone</h4>
              <p className="text-gray-600">+959421098207</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Sales - Full Height */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300 space-y-1">
          {/* Sales Title */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">💼 Contact Our Sales Team</h4>
            <p className="text-gray-600">We're here to help with pricing, demos, and more.</p>
          </div>

          {/* Email */}
          <div className="rounded-md p-4">
            <h4 className="font-semibold text-gray-800 mb-1">✉️ Email</h4>
            <p className="text-blue-500">Sales_NDMM@nttdata.com</p>
          </div>

          {/* Phone */}
          <div className="rounded-md p-4">
            <h4 className="font-semibold text-gray-800 mb-1">📞 Phone</h4>
            <p className="text-gray-600">+95 9 421141755</p>
          </div>
        </div>
      </div>

      {/* Google Map Below */}
      <div className="max-w-6xl w-full">
        <iframe
          title="Google Map"
          className="w-full h-80 rounded-lg border border-gray-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5114128041214!2d96.12658547492147!3d16.850577618048007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194ec81377ed9%3A0xea18137603de3a24!2sMICT%20Building%20No.17!5e0!3m2!1sen!2smm!4v1744959928651!5m2!1sen!2smm"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}