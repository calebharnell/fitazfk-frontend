import React, { Component } from 'react';
import { Accordion, Icon, Container } from 'semantic-ui-react';



export default class Classes extends Component {
  
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
    	<Container>
	      <Accordion fluid styled>
	        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          FK STRENGTH FULL BODY
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 0}>
	          <p>
	            Take your workout to the next level in this 28 minute EMOM (every minute on the minute) strength-optimising class while being accountable for your own intensity. The clock will decide when you’ll work and when you’ll rest, while guaranteeing that every muscle group in your body is activated. The alternation of upper and lower body exercise optimises blood shunting which increases the amount of calories burnt, even during rest periods. With our reduced rest periods your cardiovascular output is optimised leaving you not only stronger but fitter too! You’ll finish with a sense of satisfaction like no other.
	          </p>
	        </Accordion.Content>

	        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          FK STRENGTH UPPER BODY
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 1}>
	          <p>
	            Achieve the ultimate balance of muscle symmetry in 28 minutes through EMOM resistance training. Your body will remain in the 60-80% max heart rate zone, ensuring a combination of fat burn and ultimate strength gain. Push-Pull techniques will generate balanced movements, working your muscles in equality to their full potential. Your metabolic rate will peak, with sufficient rest periods to achieve optimal strength gains while improving posture leaving your body strong, fit and well aligned.
	          </p>
	        </Accordion.Content>

	        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          FK STRENGTH LOWER BODY
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 2}>
	          <p>
	            This 28-minute EMOM class will push your endurance, sculpting your lower body and ensuring optimal burn. You will alternate between anterior and posterior movements, allowing sufficient rest periods while increasing your metabolic rate. Every muscle group in your lower body will be optimised to reach its highest level of intensity, leaving your physique powerful and toned.
	          </p>
	        </Accordion.Content>

	        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          FITAZ CORE
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 3}>
	          <p>
	            This class is dedicated to the memory of Yasmin McAllister, Our FitazFK angel, who can be seen shining in the mural on our wall. She was Aaron’s wife who passed away mid 2017, and she played a massive role in designing the FitazFk gym into what it is today. This 28-minute class optimises the ultimate techniques for your abdominal defining and shaping, with EMOM resistance training ensuring maximum core exertion, while maintaining accountability for your own intensity. This was our Yazzies go to routine and had her always looking FITAZFK!
	          </p>
	        </Accordion.Content>
	      
	        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          FK HIIT SPIN
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 4}>
	          <p>
	            Our spin classes will take you on a breath-taking, cardio vascular-optimising journey to achieve ultimate lower body tone and strength. Supercharge your metabolic rate through an intense calorie burning workout, leaving you with increased lean muscle mass while seeing your posture, mobility and flexibility dramatically improve.
	          </p>
	        </Accordion.Content>
	      
	        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          FK HIIT FREESTYLE
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 5}>
	          <p>
	            This 28-minute interval class is the ultimate metabolic boosting session. Our expert instructors use full body movements to improve cardiovascular fitness through a circuit based workout, transforming your body into a fat burning machine eating away at calories long after you finish training.
	          </p>
	        </Accordion.Content>
	      
	        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          HIIT BOXING
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 6}>
	          <p>
	            This 28-minute express boxing class will see you smashing punches on our bags, optimised with a combination of cardio and strength techniques this class will be your go to in no time. Get ready for the ultimate workout in fat burning, ensuring you will not only burn extreme amounts of calories during the class, but also long after.
	          </p>
	        </Accordion.Content>
	      
	        <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          BOXING
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 7}>
	          <p>
	            Learn how to move like some of the fittest athletes in the world. Working your entire body in 45 minutes with a focus on your core and legs, this class will teach you the correct techniques in optimal body and strength control. Work hard, and you will simultaneously achieve new levels of fitness while learning how to defend yourself and increase your confidence.
	          </p>
	        </Accordion.Content>
	            
	        <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          KICKBOXING
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 8}>
	          <p>
	            Your balance, stability, flexibility and power will reach new heights in this explosive 45-minute full body workout. Learn the right techniques of how to punch, kick, knee and elbow while giving your body an extreme cardio hit. Be trained by the pro’s and be on a path to achieving leaner muscles and invigorated strength in your legs, core and butt.
	          </p>
	        </Accordion.Content>
	            
	        <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          SUSPENSION TRAINING
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 9}>
	          <p>
	            Using our suspension training system, this gymnastic based whole-body resistance workout will tighten and tone your entire body. Engage your core with strength based functional movements. Let our expert instructors perfect your technique, enabling your body to move efficiently and effectively while improving your strength, tone, flexibility and stability using gymnastic rings.
	          </p>
	        </Accordion.Content>
	                  
	        <Accordion.Title active={activeIndex === 10} index={10} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          YOGA
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 10}>
	          <p>
	            Our Yoga classes are designed to align your mind and body in equal stability, while challenging your core strength. Improve your mobility and endurance in just 45 minutes, while attaining a sense of inner peace by flooding your body with endorphins.
	          </p>
	        </Accordion.Content>
	                        
	        <Accordion.Title active={activeIndex === 11} index={11} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          PILATES
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 11}>
	          <p>
	            Combine strength activating movements with floor based Pilates to lengthen and sculpt your muscles. Focus on your technique to improve mobility and posture while activating your core.
	          </p>
	        </Accordion.Content>
	                        
	        <Accordion.Title active={activeIndex === 12} index={12} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          ROCKFIT
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 12}>
	          <p>
	            Rock your way through our 45-minute dance party. Set to an epic playlist with an easy to follow combination of moves, you’ll be sweating, toning and grooving with good vibes guaranteed!
	          </p>
	        </Accordion.Content>
	                              
	        <Accordion.Title active={activeIndex === 13} index={13} onClick={this.handleClick}>
	          <Icon name='dropdown' />
	          BEATS AND BIKES
	        </Accordion.Title>
	        <Accordion.Content active={activeIndex === 13}>
	          <p>
	            Join us on a heart racing, exhilarating 45-minute ride set to rocking music where you’ll jog, climb, race, and sprint your way to the finish line!
	          </p>
	        </Accordion.Content>
	      </Accordion>
	    </Container>
    );
  }
}
