

export default function AuthorCard({ image, name, role }) {
  return (
    <div
      className={`flex items-center rounded-lg  ${
        name
          ? 'bg-gray-100  p-5  dark:bg-light-dark'
          : 'ml-3 justify-center bg-none p-5 dark:mr-3 dark:bg-none'
      }`}
    >
     
      <div className="ltr:pl-3 rtl:pr-3">
        <h3 className="text-sm font-medium tracking-wide text-gray-900 uppercase dark:text-white">
          {name}
        </h3>
        <span className="block mt-1 text-xs text-gray-600 dark:text-gray-400">
          {role}
        </span>
      </div>
    </div>
  );
}
