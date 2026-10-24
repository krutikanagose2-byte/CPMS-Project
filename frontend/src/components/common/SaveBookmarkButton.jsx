import React, { useState, useEffect } from 'react';
import './SaveBookmarkButton.css';
import { isMaterialSaved, toggleSaveMaterial } from '../../utils/studyMaterialsStorage';

const SaveBookmarkButton = ({
  item,
  customClass = '',
  customStyle = {},
  showLabel = false,
  size = 'medium'
}) => {
  const [saved, setSaved] = useState(() => {
    return item?.id ? isMaterialSaved(item.id) : false;
  });
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (item?.id) {
      setSaved(isMaterialSaved(item.id));
    }

    const handleUpdate = () => {
      if (item?.id) {
        setSaved(isMaterialSaved(item.id));
      }
    };

    window.addEventListener('studyMaterialsUpdated', handleUpdate);
    return () => window.removeEventListener('studyMaterialsUpdated', handleUpdate);
  }, [item?.id]);

  const handleClick = (e) => {
    // Prevent navigating if wrapped inside an <a> or card click handler
    e.preventDefault();
    e.stopPropagation();

    if (!item || !item.id) return;

    const isNowSaved = toggleSaveMaterial(item);
    setSaved(isNowSaved);

    setToastMessage(isNowSaved ? 'Saved for Later!' : 'Removed from Saved');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2200);
  };

  const titleText = saved
    ? 'Saved for Later (Click to remove)'
    : 'Save for Later';

  return (
    <div
      className={`save-bookmark-btn-wrap ${customClass}`}
      style={customStyle}
      onClick={(e) => {
        // Prevent container from triggering parent card link
        e.stopPropagation();
      }}
    >
      <button
        type="button"
        className={`save-bookmark-btn ${saved ? 'is-saved' : ''} ${showLabel ? 'has-label' : ''}`}
        onClick={handleClick}
        title={titleText}
        aria-label={titleText}
        aria-pressed={saved}
      >
        {saved ? (
          // Solid / Filled Bookmark Icon
          <svg
            className="save-bookmark-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        ) : (
          // Outline Bookmark Icon
          <svg
            className="save-bookmark-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        )}

        {showLabel && (
          <span className="save-bookmark-label">
            {saved ? 'Saved' : 'Save'}
          </span>
        )}
      </button>

      {showToast && (
        <div className="save-bookmark-toast" role="status">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

// Helper function to automatically inject SaveBookmarkButton into PYQ cards in headerContent
export function enhancePyqElements(element, defaultCategory = 'Aptitude') {
  if (!element || !React.isValidElement(element)) {
    return element;
  }

  const className = element.props?.className || '';
  if (typeof className === 'string' && className.includes('pyq-card')) {
    let url = element.props?.href || '';
    let title = '';
    let thumbnail = '';

    const extractMetadata = (node) => {
      if (!node) return;
      if (Array.isArray(node)) {
        node.forEach(extractMetadata);
        return;
      }
      if (React.isValidElement(node)) {
        if (node.props?.href && !url) {
          url = node.props.href;
        }
        if (node.type === 'img' || node.props?.className?.includes('pyq-image')) {
          thumbnail = node.props.src || thumbnail;
          if (!title && node.props.alt && node.props.alt !== 'PYQ') {
            title = node.props.alt;
          }
        }
        if (node.props?.className?.includes('pyq-name') || node.type === 'h4') {
          if (typeof node.props.children === 'string') {
            title = node.props.children;
          }
        }
        if (node.props?.children) {
          extractMetadata(node.props.children);
        }
      }
    };

    extractMetadata(element);

    if (!title && url) {
      const filename = url.split('/').pop().replace(/\.pdf$/i, '');
      title = filename.replace(/_/g, ' ').toUpperCase();
    }
    if (!thumbnail && url) {
      thumbnail = url.replace(/\.pdf$/i, '_thumb.png');
    }

    const cleanId = `pdf-${(url || title || 'pyq').replace(/[^a-zA-Z0-9]/g, '_')}`;

    const item = {
      id: cleanId,
      title: title || 'Previous Year Questions PDF',
      type: 'PDF Resource',
      category: defaultCategory,
      url: url || '#',
      thumbnail: thumbnail || '/pyq/quant_pyq1_thumb.png',
      badgeBg: '#fee2e2',
      badgeColor: '#dc2626'
    };

    const existingChildren = React.Children.toArray(element.props.children);

    const hasBookmark = existingChildren.some(
      (c) => React.isValidElement(c) && (c.type === SaveBookmarkButton || (c.key && String(c.key).startsWith('bm-')))
    );
    if (hasBookmark) {
      return element;
    }

    // Filter out CardThreeDotsMenu if present to avoid icon collision
    const filteredChildren = existingChildren.filter(
      (c) => !React.isValidElement(c) || (c.type?.name !== 'CardThreeDotsMenu' && !c.props?.className?.includes('card-three-dots'))
    );

    return React.cloneElement(element, {
      key: element.key || cleanId,
      style: {
        ...(element.props.style || {}),
        position: 'relative'
      },
      children: [
        ...filteredChildren,
        <SaveBookmarkButton
          key={`bm-${cleanId}`}
          item={item}
          customStyle={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 20
          }}
        />
      ]
    });
  }

  // Recursively process children
  if (element.props?.children) {
    const enhancedChildren = React.Children.map(element.props.children, (child) =>
      enhancePyqElements(child, defaultCategory)
    );
    return React.cloneElement(element, { children: enhancedChildren });
  }

  return element;
}

export default SaveBookmarkButton;
