import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getActiveItem from '../../utils/getActiveItem';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { IoChevronForward, IoChevronDownOutline } from 'react-icons/io5';

export default function CertificationsInputs({
  certifications,
  changeCertifications,
  deleteCertification,
  createCertification,
}) {
  const [view, setView] = useState('closed');
  const [activeId, setActiveId] = useState(certifications[0].id);
  const { certification } = getActiveItem(certifications, activeId);

  function setNewActiveIdOnDelete(list, activeId) {
    if (list.length === 1) {
      //Initialize new item
      const newId = uuidv4();
      setActiveId(newId);
      createCertification(newId);
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
          <h2>Certifications</h2>
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
            <h2>Certifications</h2>
            <IoChevronDownOutline size={30} />
          </div>
          <div className="form-items">
            {certifications.map((item) => (
              <div
                className="form-item"
                onClick={() => {
                  setActiveId(item.id);
                  setView('form');
                }}
                key={item.id}
              >
                <p className="list-item">
                  {item.certification || '+ Add Info'}
                </p>
              </div>
            ))}
            <p
              className="form-item-create"
              onClick={() => {
                const newId = uuidv4();
                setActiveId(newId);
                createCertification(newId);
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
          <h2>Personal Details</h2>
          <IoChevronDownOutline size={30} />
        </div>
        <form>
          <h2>Certifications</h2>
          <label>
            Certification:
            <input
              type="text"
              name="certification"
              value={certification}
              onChange={(event) => changeCertifications(event, activeId)}
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
              deleteCertification(activeId);
              setNewActiveIdOnDelete(certifications, activeId);
              setView('list');
            }}
          />
        </div>
      </div>
    );
  }
}
