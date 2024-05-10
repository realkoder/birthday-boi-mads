import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function DialogBox() {
  return (
    <Dialog>
      <DialogTrigger className="bg-green-300 font-bold py-2 px-4 rounded">KLIK her FOR AT FÅ DIN GAVE</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">FISKEBUFFET!!</DialogTitle>
          <DialogDescription className="text-xl">
            DET SKAL DU DA HA!
            Dette er hermed et stks. tilgode bevis til en fiskebuffet på Bongholm 🚬            
          </DialogDescription>
          <DialogDescription>
          Kan også anvendes til et andet spisested aften / frokost u decide - ÅÅHHH FØDSELSDAG!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;
