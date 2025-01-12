"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define property type
interface Property {
  id: number;
  displayImage: string;
  location: string;
  heading: string;
  description: string;
  link: string;
  images: string[];
}

// Define context type
interface PropertiesContextType {
  properties: Property[];
  getPropertyById: (id: number) => Property | undefined;
  getAllProperties: () => Property[];
  loading: boolean;
  error: string | null;
}


const PropertiesContext = createContext<PropertiesContextType | undefined>(undefined);

interface PropertiesProviderProps {
  children: ReactNode;
}

export const PropertiesProvider: React.FC<PropertiesProviderProps> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/data/properties.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Property[] = await response.json();
        setProperties(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const getPropertyById = (id: number): Property | undefined =>
    properties.find((property) => property.id === id);

  const getAllProperties = (): Property[] => properties;

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        getPropertyById,
        getAllProperties,
        loading,
        error,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = (): PropertiesContextType => {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error("useProperties must be used within a PropertiesProvider");
  }
  return context;
};
