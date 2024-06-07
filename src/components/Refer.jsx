const Refer = () => {

    const userId = 'user123'; // This will be from backend
  const inviteLink = `${window.location.origin}/invite?ref=${userId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert('Invite link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

    return ( 
        <>
           <div className="mt-6 flex flex-col items-center">
            <div className="mt-4">
                <div className="flex justify-evenly gap-3"> 
                <h2 className="text-5xl font-bold">0</h2>
            <h2 className="text-5xl text-white font-bold ">Referrals</h2>
                </div>


            </div>
            </div>


            <div className="flex flex-col items-center mt-10 p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl mb-2 text-black font-bold">My Invite Link</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={inviteLink}
          readOnly
          className="p-2 border border-gray-300 rounded w-64"
        />
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Copy
        </button>
      </div>
    </div>

    <div className="mt-6 flex flex-col items-center">
            <div className="mt-5">
                <div className="flex justify-evenly gap-3"> 
            <h2 className="text-xl text-white ">You have no Referrals😭</h2>
                </div>


            </div>
            </div>

        </>
     );
}
 
export default Refer;