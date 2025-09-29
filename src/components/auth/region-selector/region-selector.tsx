"use client";

import { useState } from 'react';
import { clx } from '@/utils/styles';
import { Button } from '@/components/ui/button/button';
import { REGIONS } from '@/constants/region';


interface RegionSelectorProps {
    value: string;
    onChange: (regionId: string) => void;
}

export function RegionSelector({ value, onChange }: RegionSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedRegion = REGIONS.find(region => region.id === value) || REGIONS[3];

    return (
        <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Server Region
            </label>

            <Button
                size='md'
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white flex items-center justify-between"
            >
                <div className="flex items-center space-x-3">
                    <span className="text-2xl">{selectedRegion.flag}</span>
                    <div className="text-left">
                        <div className="font-medium text-gray-900">{selectedRegion.name}</div>
                        <div className="text-sm text-gray-500">{selectedRegion.location}</div>
                    </div>
                </div>
                <svg
                    className={clx(
                        "w-5 h-5 text-gray-400 transition-transform",
                        isOpen && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </Button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {REGIONS.map((region) => (
                        <Button
                            size='md'
                            key={region.id}
                            type="button"
                            onClick={() => {
                                onChange(region.id);
                                setIsOpen(false);
                            }}
                            className={clx(
                                "w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0",
                                value === region.id && "bg-blue-50 border-blue-200"
                            )}
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">{region.flag}</span>
                                <div className="flex-1">
                                    <div className="font-medium text-gray-900">{region.name}</div>
                                    <div className="text-sm text-gray-500 flex justify-between">
                                        <span>{region.location}</span>
                                        {region.latency && (
                                            <span className="text-green-600 font-medium">{region.latency}</span>
                                        )}
                                    </div>
                                </div>
                                {value === region.id && (
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
}