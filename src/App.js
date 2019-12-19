import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Grade from './Pages/Grade';
import Activity from './Pages/Activity';
import Feedback from './Pages/Feedback';
import Contact from './Pages/Contact';

import Addition10 from './Pages/Addition10';
import Addition15 from './Pages/Addition15';
import Addition20 from './Pages/Addition20';

import Subtraction10 from './Pages/Subtraction10';
import Subtraction15 from './Pages/Subtraction15';
import Subtraction20 from './Pages/Subtraction20';

import Multiplication10 from './Pages/Multiplication10';
import Multiplication15 from './Pages/Multiplication15';
import Multiplication20 from './Pages/Multiplication20';

import Addition from './Pages/Addition';
import Level1 from './Pages/Level1';
import Level2 from './Pages/Level2';
import Level3 from './Pages/Level3';
import Level4 from './Pages/Level4';
import Level5 from './Pages/Level5';

import Subtraction from './Pages/Subtraction';
import SubLevel1 from './Pages/SubLevel1';
import SubLevel2 from './Pages/SubLevel2';
import SubLevel3 from './Pages/SubLevel3';
import SubLevel4 from './Pages/SubLevel4';
import SubLevel5 from './Pages/SubLevel5';

import Multiplication from './Pages/Multiplication';
import MulLevel1 from './Pages/MulLevel1';
import MulLevel2 from './Pages/MulLevel2';
import MulLevel3 from './Pages/MulLevel3';
import MulLevel4 from './Pages/MulLevel4';
import MulLevel5 from './Pages/MulLevel5';

import Grade1 from './Pages/Grade1';
import Grade2 from './Pages/Grade2';
import Grade3 from './Pages/Grade3';
import Progress from './Pages/Progress';
import Questions from './Pages/Questions';
import Answer from './Pages/Answer';
import Answers from './Pages/Answers';

import Thankyou from './Pages/Thankyou';


function App(){
  return(
    <BrowserRouter>
      <div>
        <nav>
        <p>Math Quiz</p>
          <ul>
          <li><Link to = './'>Home</Link></li>
          <li><Link to = './Grade'>Grade</Link>
            <ul>
              <li><Link to = './grade1'>Grade 1</Link></li>
              <li><Link to = './grade2'>Grade 2</Link></li>
              <li><Link to = './grade3'>Grade 3</Link></li>
            </ul>
          </li>
          <li><Link to = './Activity'>Activity</Link>
            <ul>
            <li><Link to = './addition'>Addition Quiz</Link></li>
            <li><Link to = './subtraction'>Subtraction Quiz</Link></li>
            <li><Link to = './multiplication'>Multiplication Quiz</Link></li>
            </ul>
          </li>        
          <li><Link to = './feedback'>Feedback</Link></li>
          <li><Link to = './contact'>Contact</Link></li>
          </ul>
          </nav>

          <Route exact path ="/" component = {Home}></Route>
          <Route exact path = "/Grade" component = {Grade}></Route>
          <Route exact path ="/Activity" component ={Activity}></Route>
          <Route exact path ="/Feedback" component ={Feedback}></Route>
          <Route exact path = "/Contact" component = {Contact}></Route>
          <Route exact path = "/Addition10" component = {Addition10}></Route>
          <Route exact path = "/Addition15" component = {Addition15}></Route>
          <Route exact path = "/Addition20" component = {Addition20}></Route>
          <Route exact path = "/Subtraction10" component = {Subtraction10}></Route>
          <Route exact path = "/Subtraction15" component = {Subtraction15}></Route>
          <Route exact path = "/Subtraction20" component = {Subtraction20}></Route>
          <Route exact path = "/Multiplication10" component = {Multiplication10}></Route>
          <Route exact path = "/Multiplication15" component = {Multiplication15}></Route>
          <Route exact path = "/Multiplication20" component = {Multiplication20}></Route>
          <Route exact path = '/Addition' component = {Addition}></Route>
          <Route exact path = '/Level1' component = {Level1}></Route>
          <Route exact path = '/Level2' component = {Level2}></Route>
          <Route exact path = '/Level3' component = {Level3}></Route>
          <Route exact path = '/Level4' component = {Level4}></Route>
          <Route exact path = '/Level5' component = {Level5}></Route>
          <Route exact path = '/Subtraction' component = {Subtraction}></Route>
          <Route exact path = '/SubLevel1' component = {SubLevel1}></Route>
          <Route exact path = '/SubLevel2' component = {SubLevel2}></Route>
          <Route exact path = '/SubLevel3' component = {SubLevel3}></Route>
          <Route exact path = '/SubLevel4' component = {SubLevel4}></Route>
          <Route exact path = '/SubLevel5' component = {SubLevel5}></Route>
          <Route exact path = '/Multiplication' component = {Multiplication}></Route>
          <Route exact path = '/MulLevel1' component = {MulLevel1}></Route>
          <Route exact path = '/MulLevel2' component = {MulLevel2}></Route>
          <Route exact path = '/MulLevel3' component = {MulLevel3}></Route>
          <Route exact path = '/MulLevel4' component = {MulLevel4}></Route>
          <Route exact path = '/MulLevel5' component = {MulLevel5}></Route>          
          <Route exact path = '/Grade1' component = {Grade1}></Route>
          <Route exact path = '/Grade2' component = {Grade2}></Route>
          <Route exact path = '/Grade3' component = {Grade3}></Route>
          <Route exact path = '/Progress' component = {Progress}></Route>
          <Route exact path = '/Questions' component = {Questions}></Route>
          <Route exact path = '/Answer' component = {Answer}></Route>
          <Route exact path = '/Answers' component = {Answers}></Route>
          <Route exact path = '/Thankyou' component = {Thankyou}></Route>

      
      </div>
    </BrowserRouter>
  )
}

export default App;


