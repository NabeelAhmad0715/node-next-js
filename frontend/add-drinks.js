// import { useState, useEffect } from 'react';

// import classes from '../styles/Drink.module.css';

// async function sendDrinkData(drinkDetails) {
//   const response = await fetch('/api/add-drink', {
//     method: 'POST',
//     body: JSON.stringify(drinkDetails),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Something went wrong!');
//   }
// }

// function ContactForm() {
//   const [enteredName, setEnteredName] = useState('');
//   const [UploadedImage, setUploadedImage] = useState('');
//   const [enteredDescription, setEnteredDescription] = useState('');
//   const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success'
//   useEffect(() => {
//     if (requestStatus === 'success' || requestStatus === 'error') {
//       const timer = setTimeout(() => {
//         setRequestStatus(null);
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [requestStatus]);

//   async function sendMessageHandler(event) {
//     event.preventDefault();

//     // optional: add client-side validation

//     setRequestStatus('pending');

//     try {
//       await sendDrinkData({
//         email: enteredName,
//         name: UploadedImage,
//         message: enteredDescription,
//       });
//       setRequestStatus('success');
//       setEnteredDescription('');
//       setEnteredName('');
//       setUploadedImage('');
//     } catch (error) {
//       setRequestStatus('error');
//     }
//   }

//   return (
//     <section className={classes.form}>
//       <h1 className='text-center mt-5'>Add Your Drinks!</h1>
//       <form className={classes.form} onSubmit={sendMessageHandler}>
//         <div className={classes.controls}>
//           <div className={classes.control}>
//             <label htmlFor='name'>Name</label>
//             <input
//               className="form-control"
//               type='name'
//               id='name'
//               required
//               value={enteredName}
//               onChange={(event) => setEnteredName(event.target.value)}
//             />
//           </div>
//           <div className={classes.control}>
//             <label htmlFor='image'>Image</label>
//             <input
//               className="form-control"
//               type='file'
//               id='image'
//               required
//               value={UploadedImage}
//               onChange={(event) => setUploadedImage(event.target.value)}
//             />
//           </div>
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='description'>Description/Instructions</label>
//           <textarea
//             className="form-control"
//             id='description'
//             rows='5'
//             required
//             value={enteredDescription}
//             onChange={(event) => setEnteredDescription(event.target.value)}
//           ></textarea>
//         </div>

//         <div className={classes.actions}>
//           <button className="mt-4 btn btn-primary">Add Drinks</button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default ContactForm;
