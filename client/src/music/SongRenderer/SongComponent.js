import React from 'react'

function SongComponent({uri, setURI, name, artistLinks, artistNames, image}) {
    const handlePlay = ()=>{
        setURI(uri)
    }
  return (
      <>
        <img src={image} alt={name} />
        <div>{name}</div>
        {artistLinks.map(artistLink=>{
            return artistNames.map((artistName,index)=>{
                return <div key={index}>
                    <a href={artistLink} alt={artistName} target="_blank" rel='noreferrer'>{artistName}</a>
                </div>
            })
        })}
        <button onClick={handlePlay}>Play</button>
      </>
  )
}

export default SongComponent