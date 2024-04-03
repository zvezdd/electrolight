import React from 'react'
import Button from './Button/Button'

export default function TabsSection({active, onChange}) {
  return (
    <section>
      <div className="container">
        <Button isActive={active === 'main'} onClick={() => onChange('main')}>Home</Button>
        <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Feedback</Button>
        <Button isActive={active === 'contacts'} onClick={() => onChange('contacts')}>Contacts</Button>
        <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Effect</Button>
        <Button isActive={active === 'media'} onClick={() => onChange('media')}>Media</Button>
        </div>
    </section>
  )
}
