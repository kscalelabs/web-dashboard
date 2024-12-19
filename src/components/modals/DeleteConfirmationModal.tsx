import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
}

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onDelete,
  title = "Confirm Deletion",
  description = "Are you sure you want to delete this? This action cannot be undone.",
  buttonText = "Yes, delete",
}: DeleteConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 bg-background rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-foreground">{title}</h2>
        <p className="mb-6 text-foreground">{description}</p>
        <div className="flex justify-end space-x-4">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            onClick={() => {
              onDelete();
              onClose();
            }}
            variant="destructive"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
