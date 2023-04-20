import Posts from '../components/Posts'

export default function Home(){

    const props = {
      imgURL: "https://dummyimage.com/600x400/000/fff",
      heading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, sapiente?",
      author: "HAHA",
      time: "2023-04-17 18:10",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit natus eius error nostrum et cumque neque eveniet consequuntur. Fugiat consequatur doloremque sed laboriosam sit omnis dolores voluptates deleniti eaque dignissimos, voluptatem sint animi libero saepe corporis ex illo doloribus dolor provident modi, distinctio nulla! Perferendis fugiat alias obcaecati dolor laudantium."
    }
    return(
      <>
        <Posts props={props}/>
        <Posts props={props}/>
        <Posts props={props}/>
      </>
    )
  }