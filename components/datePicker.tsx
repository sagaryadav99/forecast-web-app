"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export function DatePickerTime({
  date,
  setDate,
}: {
  date: Date;
  setDate: (a: Date) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <FieldGroup className="mx-auto w-[150px] flex-row">
      <Field>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker-optional"
              className="w-32 justify-between font-normal"
            >
              {date ? format(date, "PPP") : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={new Date(2024, 0)}
              startMonth={new Date(2024, 0, 1)}
              endMonth={new Date(2024, 0, 31)}
              onSelect={(date) => {
                if (!date) {
                  return;
                }
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-32">
        <Input
          type="time"
          id="time-picker-optional"
          step={3600}
          value={format(date, "HH:mm")}
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          onChange={(e) => {
            const hour = parseInt(e.target.value);

            const newDate = new Date(date);
            newDate.setHours(hour);

            setDate(newDate);
          }}
        />
      </Field>
    </FieldGroup>
  );
}
