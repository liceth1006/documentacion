import Link from "next/link"
export default function VerticalNavbar (){
return(
  <div className="lg: -mt-16 z-10 pt-16">
    <div className="sticky top-0 lg:bottom-0 lg:h-[calc(100vh-4rem)] flex flex-col">
      <div className="overflow-y-scroll no-bg-scrollbar lg:w-[324px] grow bg-wash dark:bg-wash-dark ">
        <aside className="lg:grow flex-col w-full pb-8 lg:pb-0 lg:max-w-custom-xs z-10 hidden lg:block">
          <nav className="w-full pt-6 scrolling-touch lg:h-auto grow pe-0 lg:pe-5 lg:pb-16 md:pt-4 lg:pt-4 scrolling-gpu">
            <ul>
            <li>
                <Link href="/" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-cyan-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5 ">
                  <div>Inicio</div>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="duration-100 ease-in transition rotate-0" ><g fill="none" fill-rule="evenodd" transform="translate(-446 -398)"><path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path><polygon points="446 418 466 418 466 398 446 398"></polygon></g></svg>
                  </span>
                </Link>
              </li>
              <li>
                <a href="/Poo" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-cyan-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5 ">
                  <div>POO</div>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="duration-100 ease-in transition rotate-0" ><g fill="none" fill-rule="evenodd" transform="translate(-446 -398)"><path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path><polygon points="446 418 466 418 466 398 446 398"></polygon></g></svg>
                  </span>
                </a>
              </li>
      
            </ul>
          </nav>

        </aside>

      </div>

    </div>

  </div>
)
}