import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative bg-white px-6 pt-20 md:px-16 lg:px-32 xl:px-72 pb-20">
      {/* Sofa Image - overlaps footer */}
      <div className="absolute right-0 top-0 -translate-y-1/2 hidden md:block">
        <Image
          src="/images/sofa.png"
          alt="Sofa"
          width={400}
          height={400}
          className="max-h-[400px] w-auto"
        />
      </div>

      <div className="gap-12 relative z-10">
        {/* Left: Newsletter + Brand Info */}
        <div className="w-1/2">
          {/* Newsletter */}
          <div className="mb-10">
            <p className="font-semibold text-lg mb-4">Subscribe To Newsletter</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="p-3 border rounded flex-1"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 border rounded flex-1"
              />
              <button className="px-5 rounded text-white bg-[#3b5d50] flex items-center justify-center p-2">
                <Image
                  src="/icon/send.png"
                  alt="Send"
                  width={20}
                  height={20}
                  className="h-5 w-auto"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:flex md:block w-full justify-between gap-12">
          {/* Brand info */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">FurniFlex</h1>
            <p className="text-sm leading-6 text-gray-600 mb-6">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae <br />
              odio quis nisl dapibus malesuada. Nullam ac aliquet velit. <br />
              Aliquam vulputate velit imperdiet dolor tempor tristique. <br />
              Pellentesque habitant morbi tristique senectus et netus.
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <ul className="space-y-3">
              <li className="font-semibold">Company</li>
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
            <ul className="space-y-3">
              <li className="font-semibold">Support</li>
              <li>Knowledge Base</li>
              <li>Live Chat</li>
            </ul>
            <ul className="space-y-3">
              <li className="font-semibold">Careers</li>
              <li>Jobs</li>
              <li>Our Team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="space-y-3">
              <li className="font-semibold">Products</li>
              <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic Chair</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
