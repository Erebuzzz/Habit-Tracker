"use client";
import { useState, useEffect } from "react";
import { db } from "../lib/firebase"; // Firestore reference
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const TeaChecklist = () => {
  const { user } = useAuth(); // Firebase Auth
  const [teaConsumption, setTeaConsumption] = useState<boolean[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      const today = new Date().toISOString().split("T")[0];
      const docRef = doc(db, "tea-tracker", `${user.uid}-${today}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTeaConsumption(data.teaConsumption);
        setLimit(data.limit);
      } else {
        setTeaConsumption(Array(limit).fill(false)); // Default checklist
        await setDoc(docRef, { teaConsumption: Array(limit).fill(false), limit });
      }
      setLoading(false);
    };
    fetchData();
  }, [user]);

  const toggleTea = async (index: number) => {
    if (!user) return;
    const today = new Date().toISOString().split("T")[0];
    const docRef = doc(db, "tea-tracker", `${user.uid}-${today}`);

    const updatedList = [...teaConsumption];
    updatedList[index] = !updatedList[index]; // Toggle tea consumption
    setTeaConsumption(updatedList);
    
    await updateDoc(docRef, { teaConsumption: updatedList });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-800">Tea Consumption Checklist</h2>
      <div className="flex gap-2 mt-4">
        {teaConsumption.map((consumed, index) => (
          <button
            key={index}
            className={`p-2 w-10 h-10 text-white rounded-lg ${
              consumed ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => toggleTea(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-2">
        You have consumed {teaConsumption.filter(Boolean).length}/{limit} cups today.
      </p>
    </div>
  );
};

export default TeaChecklist;