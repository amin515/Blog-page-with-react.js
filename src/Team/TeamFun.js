
import { student } from '../data'


const TeamFun = ({layout, bg}) => {
    return(
        <section style={{backgroundColor: bg}} className={ 'team ' + layout } >
        <div className="container">
         <div className="row">
             <div className="col">
                 <div className="team-wrap">
                     <div className="team-box">
                         <h1>Our Developer</h1>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi in esse fuga soluta id facere facilis, accusantium qui deserunt officiis nisi incidunt ipsam, aliquid ullam quia nostrum. Facilis, voluptate provident?</p>
                     </div>
                 </div>
             </div>
         </div>
         <div className="row">
           
              {
                student.map((data) =>
                <div className="col-md-4">
               <div className="team-body">
               <div className="team-body-wrap">
               <img src={ data.photo } alt="" />
               <div className="team-text-box">
                 <h4>{ data.name }</h4>
                 <h5>{ data.age }<span>Years old</span></h5>
                 <p>{ data.skill }</p>

             </div>
         </div>
     </div>
  </div>
                  
                  )
              }

   

         </div>
     </div>
   </section>
    )
}

export default TeamFun;

