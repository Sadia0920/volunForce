import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function HiddenBenefits() {
  return (
    <div className='p-16 my-7 bg-[rgb(255,111,0,0.3)] w-10/12 mx-auto rounded-xl'>
      <Helmet>
        <title>VolunForce | Hidden Benefits</title>
      </Helmet>
      <div className='text-center'>
      <i className="fa-solid fa-suitcase-medical text-4xl"></i>
      </div>
      <h1 className='text-center text-3xl font-bold'>The Hidden Benefits of Volunteering for Your Mental Health</h1>
      <p className='text-lg mt-7 font-medium'>Volunteering isn’t just about giving back—it's also a powerful way to boost your mental well-being. While the act of helping others is fulfilling, it also brings a host of hidden benefits for your mind and emotions. Here’s how volunteering can improve your mental health:
      <br></br>
      <br></br>
      <span className='text-xl font-bold'>1.Reduces Stress:</span>Engaging in volunteer activities helps shift focus away from personal worries. By immersing yourself in meaningful work, you can experience a sense of calm and purpose that alleviates stress.
      <br></br>
      <span className='text-xl font-bold'>2.Enhances Mood:</span>
      Helping others triggers the release of endorphins, often referred to as the “helper’s high.” This natural mood booster can leave you feeling happier and more optimistic.
      <br></br>
      <span className='text-xl font-bold'>3.Builds a Sense of Purpose:</span>
      Volunteering gives your actions meaning and helps you feel more connected to the world. This sense of purpose can counter feelings of loneliness or aimlessness.
      <br></br>
      <span className='text-xl font-bold'>4.Increases Social Connections:</span>Working with others toward a shared goal fosters relationships and combats isolation. Strong social bonds are essential for maintaining mental health and overall well-being.
      <br></br>
      <span className='text-xl font-bold'>5.Boosts Confidence:</span>
As you see the positive impact of your efforts, you gain a greater sense of self-worth and accomplishment. This improved self-esteem can ripple into other areas of your life.
      <br></br>
      <span className='text-xl font-bold'>6.Provides Perspective:</span>
Volunteering exposes you to different life experiences and challenges. This perspective can help you feel more grateful and reduce negative thought patterns.
      <br></br>
      <span className='text-xl font-bold'>7.Promotes Resilience:</span>
Facing challenges and solving problems while volunteering can improve your ability to cope with stress and adapt to change in your personal life.
      <br></br>
      <span className='text-xl font-bold'>8.Encourages Mindfulness:</span>
Being present in the moment while helping others encourages mindfulness, which can reduce anxiety and improve mental clarity.
      </p>
    </div>
  )
}