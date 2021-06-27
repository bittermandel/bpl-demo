import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const navigation = [
  { name: 'Ladder', href: '#', icon: HomeIcon, current: true },
  { name: 'Items', href: '#', icon: FolderIcon, current: false },
  { name: 'Community', href: '#', icon: UsersIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Base(props) {
  return (
    <div className="h-screen flex overflow-hidden bg-background-pattern">
      {/* Static sidebar for desktop */}
      <div className="hidden from-indigo-500 to-purple-700 bg-gradient-to-b md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-22 w-full"
                src="/bpl4_banner.png"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {props.children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
