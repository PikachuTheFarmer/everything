import "./Card.css";
import {useState} from 'react';


export default function Card() {
    const [isActive, setIsActive] = useState(true);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };
  return (
    <div className="card" >
		<div className={isActive ? 'card__inner' : 'card__inner is-flipped'} onClick={handleClick} >
			<div className="card__face card__face--front">
				<h2>Our Rover</h2>
			</div>
			<div className="card__face card__face--back">
				<div className="card__content">
					<div className="card__header">
						<img src="" alt="pp" className="pp" />
						<h2>Rover</h2>
					</div>
					<div className="card__body">
						<h3>Rover</h3>
						<p>This is our rover  this is rover, <strong>rover</strong> .</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}
