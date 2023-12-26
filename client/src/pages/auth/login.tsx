import Banner from '@/components/sections/banner'
import LoginForm from '@/components/sections/login-form'
import SiteFooter from '@/components/sections/site-footer'
import SocialLogin from '@/components/sections/social-login'
import QRCode from '@/components/ui/qr-code'

const LoginPage = () => {
  return (
    <>
      <div className="bg-[#101010] h-screen">
        <Banner />
        <div className="w-full px-4 sm:px-0">
          <div className="max-w-[370px] mx-auto w-full z-50 text-center">
            <LoginForm />
            <div className="text-center text-[#777777] text-[15px]">
              Forgot password?
            </div>
            <div className="mt-6 space-y-5">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-[#393939]" />
                </div>
                <div className="relative flex justify-center text-xs items-center">
                  <span className="bg-[#101010] px-3 text-[#777777] text-base">
                    or
                  </span>
                </div>
              </div>
              <SocialLogin />
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
      <QRCode />
    </>
  )
}

export default LoginPage
