import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReviews, setPosts } from "state";
import ReviewWidget from "./ReviewWidget";

const ReviewsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.reviews);
  const token = useSelector((state) => state.token);

  const getReviews = async () => {
    const response = await fetch("http://localhost:3001/reviews", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setReviews({ reviews: data }));
  };

  const getUserReviews = async () => {
    const response = await fetch(
      `http://localhost:3001/reviews/${userId}/reviews`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setReviews({ reviews: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserReviews();
    } else {
      getReviews();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          fullName,
          nickName,
          description,
          major,
          picturePath,
          userPicturePath,
          likes,
          // comments,
        }) => (
          <ReviewWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${nickName}`}
            description={description}
            major={major}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            // comments={comments}
          />
        )
      )}
    </>
  );
};

export default ReviewsWidget;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setReviews } from "state";
// import ReviewWidget from "./ReviewWidget";

// const ReviewsWidget = ({ userId, isProfile = false }) => {
//   const dispatch = useDispatch();
//   const reviews = useSelector((state) => state.reviews);
//   const token = useSelector((state) => state.token);

//   const getReviews = async () => {
//     const response = await fetch("http://localhost:3001/reviews", {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const data = await response.json();
//     dispatch(setReviews({ reviews: data }));
//   };

//   const getUserReviews = async () => {
//     const response = await fetch(
//       `http://localhost:3001/reviews/${userId}/reviews`,
//       {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     const data = await response.json();
//     dispatch(setReviews({ reviews: data }));
//   };

//   useEffect(() => {
//     if (isProfile) {
//       getUserReviews();
//     } else {
//       getReviews();
//     }
//   }, []); 
//   // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <>
//       {reviews.map(
//         ({
//           _id,
//           userId,
//           fullName,
//           nickName,
//           description,
//           major,
//           picturePath,
//           userPicturePath,
//           likes,
//           // comments,
//         }) => (
//           <ReviewWidget
//             key={_id}
//             postId={_id}
//             postUserId={userId}
//             name={`${nickName}`}
//             description={description}
//             major={major}
//             picturePath={picturePath}
//             userPicturePath={userPicturePath}
//             likes={likes}
//           />
//         )
//       )}
//     </>
//   );
  
// };

// export default ReviewsWidget;
