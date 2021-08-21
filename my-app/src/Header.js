import './App.css';
import Card from './Card';


function Header(){

    const carddata=[
        {
        img:"https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg",
        title:"React js Developer",
        describe:"Visymo Search uses functional to allow us and our partners to use your data for the best experienceVisymo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience",
    },

    {
        img:"https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
        title:"React js Developer",
        describe:"Visymo Search uses functional  and our partners to use your data for the best experienceVisymo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience"
    },

    {
        img:"https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg",
        title:"React js Developer",
        describe:"Visymo Search uses functional to allow us and our partners to use your data for the best experienceVisymo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience",
    },

    {
        img:"https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
        title:"React js Developer",
        describe:"Visymo Search uses functional  and our partners to use your data for the best experienceVisymo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience"
    },
    {
        img:"https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg",
        title:"React js Developer",
        describe:"Visymo Search uses functional to allow us and our partners to use your data for the best experienceVisymo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience",
    },

    {
        img:"https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
        title:"React js Developer",
        describe:"Visymo Search uses functional  and our partners to use your data for the best experienceVisymo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience"
    },

    {
        img:"https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg",
        title:"React js Developer",
        describe:"Visymo Search uses functional to allow us and our partners to use your data for the best experienceVisymo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience",
    },

    {
        img:"https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
        title:"React js Developer",
        describe:"Visymo Search uses functional  and our partners to use your data for the best experienceVisymo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience"
    },
]




    return(
        <div className="container">
    {
           carddata.map((info,index)=>(

            <Card img={info.img} title={info.title} des={info.describe}/>
           ))
   

}
</div>
 );
}
export default Header;