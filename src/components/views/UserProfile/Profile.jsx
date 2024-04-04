import React from 'react';


const Profile = () => {
    return (
        <>
           <div className="bg-gray-100">
  <div className="container mx-auto py-8">
    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
      <div className="col-span-4 sm:col-span-3">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-gray-700">Software Developer</p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
              <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
            </div>
          </div>
          <hr className="my-6 border-t border-gray-300" />
          <div className="flex flex-col">
            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
            <ul>
              <li className="mb-2">JavaScript</li>
              <li className="mb-2">React</li>
              <li className="mb-2">Node.js</li>
              <li className="mb-2">HTML/CSS</li>
              <li className="mb-2">Tailwind Css</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-4 sm:col-span-9">
        <div className="bg-white shadow rounded-lg p-6">
          {/* Calendar */}
          <div>
  <h2 className="text-base font-semibold leading-6 text-gray-900">Birthday of celebrity</h2>
  <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
      <div className="flex items-center text-gray-900">
        <button type="button" className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Previous month</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex-auto text-sm font-semibold">January</div>
        <button type="button" className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Next month</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {/*
    Always include: "py-1.5 hover:bg-gray-100 focus:z-10"
    Is current month, include: "bg-white"
    Is not current month, include: "bg-gray-50"
    Is selected or is today, include: "font-semibold"
    Is selected, include: "text-white"
    Is not selected, is not today, and is current month, include: "text-gray-900"
    Is not selected, is not today, and is not current month, include: "text-gray-400"
    Is today and is not selected, include: "text-indigo-600"

    Top left day, include: "rounded-tl-lg"
    Top right day, include: "rounded-tr-lg"
    Bottom left day, include: "rounded-bl-lg"
    Bottom right day, include: "rounded-br-lg"
  */}
        <button type="button" className="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          {/*
      Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
      Is selected and is today, include: "bg-indigo-600"
      Is selected and is not today, include: "bg-gray-900"
    */}
          <time dateTime="2021-12-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2021-12-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2021-12-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2021-12-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2021-12-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
        </button>
        <button type="button" className="rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-07" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">7</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-08" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">8</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-09" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">9</time>
        </button>
        <button type="button" className="bg-red-500 py-1.5 text-gray-900 hover:bg-red-300 focus:z-10">
          <time dateTime="2022-01-10" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">10</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-11" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">11</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-12" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">12</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-13" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">13</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-14" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">14</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-15" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">15</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-16" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">16</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-17" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">17</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-18" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">18</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-19" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">19</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-20" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">20</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-21" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">21</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-22" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full text-gray-900">22</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-23" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">23</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-24" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">24</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-25" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">25</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-26" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">26</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
        </button>
        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
        </button>
        <button type="button" className="rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-01-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-02-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-02-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-02-03" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-02-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
        </button>
        <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-02-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
        </button>
        <button type="button" className="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
          <time dateTime="2022-02-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
        </button>
      </div>
      <button type="button" className="mt-8 w-full rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add event</button>
    </div>
    <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
      <li className="relative flex space-x-6 py-6 xl:static">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-F5fvhIUKVTVcTY4VyHo-Otw0NHVbLr3NA&usqp=CAU" alt="" className="h-14 w-14 flex-none rounded-full" />
        <div className="flex-auto">
          <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">Pat Benatar</h3>
          <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
            <div className="flex items-start space-x-3">
              <dt className="mt-0.5">
                <span className="sr-only">Date</span>
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                </svg>
              </dt>
              <dd><time dateTime="2022-01-10T17:00">January 10th, 2024</time></dd>
            </div>
            <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
              <dt className="mt-0.5">
                <span className="sr-only">Location</span>
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                </svg>
              </dt>
              <dd>Greenpoint, Brooklyn, New York City</dd>
            </div>
          </dl>
        </div>
        <div className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
          <div>
            <button type="button" className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open options</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              </svg>
            </button>
          </div>
          {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
        </div>
      </li></ol></div>
</div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Profile