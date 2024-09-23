import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'; 

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  userType: string;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ isOpen, onClose, email, userType }) => {
  const userTypeText = {
    listener: 'Listener',
    artist: 'Artist',
    sponsor: 'Sponsor',
  }[userType] || 'User';

  return (
    <Dialog open={isOpen} onClose={onClose}>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white text-tertiary dark:bg-black rounded-lg shadow-lg max-w-sm w-full dark:text-primary mx-auto p-6">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-lg font-semibold">Success!</DialogTitle>
            <button onClick={onClose} className="p-1">
              <XMarkIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-2">
            {email} successfully joined the {userTypeText} waitlist.
          </p>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ModalWrapper;
