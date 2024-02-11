import React from 'react'

const Footer = () => {
  return (
    <div
      className='ui horizontal divider'
      style={{ marginTop: '0' }}
    >
      <div
        className='ui segment basic center aligned'
        style={{ color: 'white', paddingTop: '7px' }}
      >
        <p>
         Developed with {' '}
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              aria-hidden='true'
              className='react icon large'
            />
          </a>
         by {' '}
          <a
            href='https://sripwoud.xyz'
            target='_blank'
            rel='noopener noreferrer'
          >
               sripwoud
          </a>
        </p>
        <p>
          <a
            href='https://github.com/sripwoud/dj-covid'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              aria-hidden='true'
              className='icon github large'
              size='large'
              color='black'
            />
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
