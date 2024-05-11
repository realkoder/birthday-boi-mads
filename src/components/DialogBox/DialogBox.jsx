import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

function DialogBox({ setShowCard }) {
  return (
    <Dialog>
      <DialogTrigger
        className="bg-green-300 font-bold py-2 px-4 rounded"
        onClick={() => {
          setShowCard(true);
          toast("TILGODEBEVIS GENERATED", {
            description:
              "En midddag på Bornholm eller evt et lift til Opalsøen",
            duration: 5000,
          });
        }}
      >
        KLIK HER FOR AT FÅ DIN GAVE
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">FISKEBUFFET!!</DialogTitle>
          <DialogDescription className="text-xl">
            DET SKAL DU DA HA!
          </DialogDescription>
          <DialogDescription className="text-lg">
            Dette er hermed et stks. tilgodebevis til en fiskebuffet på Bongholm
            🚬
          </DialogDescription>
          <DialogDescription>ÅÅHHH FØDSELSDAG!</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;
