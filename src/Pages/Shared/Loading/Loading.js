import React from 'react';

const Loading = () => {
   return (
     <div className='text-center mt-5'>
       <button class="btn btn-light " type="button" disabled>
         <span class="spinner-border spinner-border-sm text-info me-2" role="status" aria-hidden="true"></span>
         Loading...
       </button>
     </div>
   );
};

export default Loading;