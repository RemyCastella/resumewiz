import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getActiveItem from '../../utils/getActiveItem';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { IoChevronForward, IoChevronDownOutline } from 'react-icons/io5';

export default function JobInputs({
  experiences,
  changeExperiences,
  deleteExperience,
  createExperience,
}) {
  const [view, setView] = useState('closed');
  const [activeId, setActiveId] = useState(experiences[0].id);
  const { title, organization, dates, description } = getActiveItem(
    experiences,
    activeId
  );

  function setNewActiveIdOnDelete(list, activeId) {
    if (list.length === 1) {
      //Initialize new item
      const newId = uuidv4();
      setActiveId(newId);
      createExperience(newId);
      setView('closed');
    } else {
      //ID of first element in new list
      setActiveId(list.filter((item) => item.id !== activeId)[0].id);
    }
  }

  if (view === 'closed') {
    return (
      <div className="personal-detail-form">
        <div className="form-header" onClick={() => setView('list')}>
          <h2>Experience</h2>
          <IoChevronForward size={30} />
        </div>
      </div>
    );
  }

  if (view === 'list') {
    return (
      <>
        <div className="personal-detail-form">
          <div className="form-header" onClick={() => setView('closed')}>
            <h2>Experiences</h2>
            <IoChevronDownOutline size={30} />
          </div>
          <div className="form-items">
            {experiences.map((item) => (
              <div
                className="form-item"
                onClick={() => {
                  setActiveId(item.id);
                  setView('form');
                }}
                key={item.id}
              >
                <p className="experience-title">
                  {item.title.toUpperCase() || '+ Add Info'}
                </p>
                <p className="label">{item.organization}</p>
              </div>
            ))}
            <p
              className="form-item-create"
              onClick={() => {
                const newId = uuidv4();
                setActiveId(newId);
                createExperience(newId);
                setView('form');
              }}
            >
              + Add Item
            </p>
          </div>
        </div>
      </>
    );
  }

  if (view === 'form') {
    return (
      <div className="personal-detail-form">
        <div className="form-header" onClick={() => setView('closed')}>
          <h2>Experience</h2>
          <IoChevronDownOutline size={30} />
        </div>
        <form>
          <label>
            Title:
            <input
              type="text"
              value={title}
              name="title"
              onChange={(event) => changeExperiences(event, activeId)}
            />
          </label>
          <label>
            Organization:
            <input
              type="text"
              value={organization}
              name="organization"
              onChange={(event) => changeExperiences(event, activeId)}
            />
          </label>
          <label>
            Dates:
            <input
              type="text"
              value={dates}
              name="dates"
              onChange={(event) => changeExperiences(event, activeId)}
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              name="description"
              onChange={(event) => changeExperiences(event, activeId)}
            />
          </label>
        </form>
        <div className="form-icons">
          <FaCheckCircle
            size={25}
            style={{ color: '#89B75B', cursor: 'pointer' }}
            onClick={() => setView('list')}
          />
          <FaTrashAlt
            size={25}
            style={{ color: '#FF7F7F', cursor: 'pointer' }}
            onClick={() => {
              deleteExperience(activeId);
              setNewActiveIdOnDelete(experiences, activeId);
              setView('list');
            }}
          />
        </div>
      </div>
    );
  }
}
