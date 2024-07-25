import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {trackDetails, onDeleteTrack} = props
  const {imageUrl, name, genre, duration, id} = trackDetails

  const onClickDeleteTrack = () => {
    onDeleteTrack(id)
  }

  return (
    <li className="track-item">
      <div className="track-details">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="track-name-genre">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="track-duration-section">
        <p className="track-duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          aria-label="deleteButton"
          data-testid="delete"
          onClick={onClickDeleteTrack}
        >
          <AiOutlineDelete size={20} color="#ffffff" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
