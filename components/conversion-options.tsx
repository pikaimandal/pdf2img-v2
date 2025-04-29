"use client"

import type { ImageFormat, Resolution } from "@/components/converter"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ConversionOptionsProps {
  format: ImageFormat
  resolution: Resolution
  onFormatChange: (format: ImageFormat) => void
  onResolutionChange: (resolution: Resolution) => void
}

export function ConversionOptions({ format, resolution, onFormatChange, onResolutionChange }: ConversionOptionsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Output Format</Label>
        <RadioGroup
          value={format}
          onValueChange={(value) => onFormatChange(value as ImageFormat)}
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="png" id="png" />
            <Label htmlFor="png" className="cursor-pointer">
              PNG
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="jpg" id="jpg" />
            <Label htmlFor="jpg" className="cursor-pointer">
              JPG
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="jpeg" id="jpeg" />
            <Label htmlFor="jpeg" className="cursor-pointer">
              JPEG
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="svg" id="svg" />
            <Label htmlFor="svg" className="cursor-pointer">
              SVG
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="resolution">Resolution (DPI)</Label>
        <Select
          value={resolution.toString()}
          onValueChange={(value) => onResolutionChange(Number.parseInt(value) as Resolution)}
        >
          <SelectTrigger id="resolution" className="w-[180px]">
            <SelectValue placeholder="Select resolution" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="72">72 DPI (Screen)</SelectItem>
            <SelectItem value="150">150 DPI (Standard)</SelectItem>
            <SelectItem value="300">300 DPI (Print)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
