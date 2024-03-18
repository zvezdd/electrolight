import { useEffect, useState } from "react";
import './Header.css'

export default function Header() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setNow(new Date()), 1000)
       return () => {
         clearInterval(interval)
       }
    }, []);

   
    return (
      <header className="header">
        <h3>result university</h3>
        <span>Time now: {now.toLocaleTimeString()}</span>
      </header>
    );
  }
  