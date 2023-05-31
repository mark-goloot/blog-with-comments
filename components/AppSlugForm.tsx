import React, {useState} from 'react';

function AppSlugForm({setAppSlug}) {
  const [inputVal, setInputVal] = useState(process.env.NEXT_PUBLIC_DEFAULT_APP_SLUG)

  const onSubmit = (e) => {
    setAppSlug(inputVal)
    window.location.reload()
  }

  return (
      <form onSubmit={onSubmit}>
        <h1>Please enter your app slug</h1>
        <input
            type="text"
            onChange={e => setInputVal(e.target.value)}
            value={inputVal}
        />
        <button type="submit"
                className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700">
          GO
        </button>
      </form>
  );
}

export default AppSlugForm;
