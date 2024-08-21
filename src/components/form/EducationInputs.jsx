import React, { act, useState } from 'react';
import getActiveItem from '../../utils/getActiveItem';
import { IoChevronForward, IoChevronDownOutline } from 'react-icons/io5';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

export default function EducationInputs({
  education,
  changeEducation,
  deleteEducation,
  createEducation,
}) {
  const [view, setView] = useState('closed');
  const [activeId, setActiveId] = useState(education[0].id);
  const { institution, degree, dates } = getActiveItem(education, activeId);

  function setNewActiveIdOnDelete(list, activeId) {
    if (list.length === 1) {
      //Initialize new item
      const newId = uuidv4();
      setActiveId(newId);
      createEducation(newId);
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
          <h2>Education</h2>
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
            <h2>Education</h2>
            <IoChevronDownOutline size={30} />
          </div>
          <div className="form-items">
            {education.map((item) => (
              <div
                className="form-item"
                onClick={() => {
                  setActiveId(item.id);
                  setView('form');
                }}
                key={item.id}
              >
                <p className="institution-name">
                  {item.institution || '+ Add Info'}
                </p>
                <p>{item.degree}</p>
              </div>
            ))}
            <p
              className="form-item-create"
              onClick={() => {
                const newId = uuidv4();
                setActiveId(newId);
                createEducation(newId);
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
          <h2>Education</h2>
          <IoChevronDownOutline size={30} />
        </div>
        <form>
          <label>
            Institution:
            <input
              type="text"
              name="institution"
              value={institution}
              onChange={(event) => changeEducation(event, activeId)}
            />
          </label>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={degree}
              onChange={(event) => changeEducation(event, activeId)}
            />
          </label>
          <label>
            Dates:
            <input
              type="text"
              name="dates"
              value={dates}
              onChange={(event) => changeEducation(event, activeId)}
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
              deleteEducation(activeId);
              setNewActiveIdOnDelete(education, activeId);
              setView('list');
            }}
          />
        </div>
      </div>
    );
  }
}
