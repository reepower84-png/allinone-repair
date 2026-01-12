export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/images/ChatGPT_Image_2026년_1월_12일_오후_02_06_05_가로-removebg-preview.png"
                alt="올인원설비"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              합리적인 금액으로 누수·하수구·설비·인테리어를 올인원으로 해결해 드립니다.
              전국 어디서나 신속하고 정확한 서비스를 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-gray-400">
              <li>누수 탐지 및 수리</li>
              <li>하수구 막힘 해결</li>
              <li>설비 공사</li>
              <li>인테리어</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Company Info */}
          <div className="text-sm text-gray-500 space-y-1 mb-6">
            <p>상호: 제이코리아 | 대표: 이주영</p>
            <p>사업자등록번호: 278-30-01540</p>
            <p>주소: 인천광역시 계양구 오조산로57번길 15, 7층 7106호</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} 올인원설비. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
