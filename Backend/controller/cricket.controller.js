import cricket from "../modal/kit.modal.js";

export const getkit = async (req, res) => {
    try {
        const kit = await cricket.find();
        res.status(200).json(kit);  // Change req to res. response a sob data pabo
    } catch (error) {
        console.log("error:", error);
        res.status(500).json(error);
    }
};
