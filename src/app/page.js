import Image from "next/image";
// import Header2 from "./components/header";
export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="my-5 text-success" >welcome to My Website</h1>
      <Image
              src="/HD.jpg" // ✅ Correct: Directly use '/HD.jpg' because it's in 'public'
              alt="My Local Image"
              width={1000}
              height={500}
              className="my-5 mx-5"
            />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p className="w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui iste, modi voluptatem soluta consequatur quae. Aperiam sequi vero quisquam. Delectus, eveniet, unde, eos maxime ad eum doloribus soluta nobis mollitia quasi ipsum. Dolore esse inventore quam corporis et eligendi voluptatem nemo, tenetur non accusantium omnis, earum suscipit quis! Enim!</p>
    </div>
  );
}
