import React from 'react'

export default function TableCareer() {
  return (
      <div className='container-fluid py-16 mx-auto'>
        <div className='grid justify-items-stretch mb-8'>
            <h1 className='text-8xl mr-6 text-black font-sans font-extrabold'> Work with us </h1>
        </div>

    <div className='flex justify-center mb-10'>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <p className='text-gray-300'> Open Positions : <span className='text-black'> 573</span> </p>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button className='bg-gray-200 rounded-xl flex justify-between px-3' style={{width:'180px'}}> Select a Craft
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button className='bg-gray-200 rounded-xl flex justify-between px-3' style={{width:'200px'}}> Select a Prouct Team
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button className='bg-gray-200 rounded-xl flex justify-between px-3' style={{width:'200px'}}> Select an Office
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </th>
                  <th scope="col" className="relative px-6 py-3"> <span className="sr-only">Edit</span></th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                          <div className="text-sm text-gray-500">jane.cooper@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                        <div className="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
                </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>

  </div>
</div>
  )
}
