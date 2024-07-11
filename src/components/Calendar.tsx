import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isToday } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <View className="flex flex-row justify-between items-center p-4">
        <TouchableOpacity onPress={() => setCurrentDate(subMonths(currentDate, 1))}>
          <Text className="text-primary text-lg">{'<'}</Text>
        </TouchableOpacity>
        <Text className="text-primary text-lg font-bold">
          {format(currentDate, 'MMMM yyyy')}
        </Text>
        <TouchableOpacity onPress={() => setCurrentDate(addMonths(currentDate, 1))}>
          <Text className="text-primary text-lg">{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <View className="flex flex-row">
        {daysOfWeek.map((day) => (
          <View key={day} className="flex-1">
            <Text className="text-center text-xs text-muted">
              {day}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const renderDays = () => {
    const weeks = [];
    const startDate = startOfWeek(startOfMonth(currentDate));
    const endDate = endOfWeek(endOfMonth(currentDate));
    let date = startDate;

    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
    };

    while (date <= endDate) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const dayDate = date;
        const isCurrentDay = isToday(dayDate);
        const isSelectedDay = isSameDay(dayDate, selectedDate);
        const isCurrentMonth = isSameMonth(dayDate, currentDate);
        const isPastDate = dayDate < new Date() && !isCurrentDay;

        days.push(
          <View key={dayDate.toString()} className="flex-1 aspect-square">
            <TouchableOpacity
              onPress={() => isCurrentMonth && handleDateSelect(dayDate)}
              className={`
                w-full h-full justify-center items-center
                ${isSelectedDay && isCurrentMonth ? 'bg-muted' : 'bg-white'}
                ${isCurrentDay && isCurrentMonth ? 'border border-primary' : ''}
              `}
            >
              {isCurrentMonth && (
                <View className="items-center">
                  <Text
                    className={`
                      text-center
                      ${isPastDate ? 'text-muted' : 'text-primary'}
                      ${isSelectedDay ? 'text-primary' : ''}
                      ${isCurrentDay && !isSelectedDay ? 'font-bold' : ''}
                    `}
                  >
                    {format(dayDate, 'd')}
                  </Text>
                  {isCurrentDay && (
                    <View className="w-4 h-0.5 bg-primary mt-0.5" />
                  )}
                </View>
              )}
            </TouchableOpacity>
          </View>
        );
        date = addDays(date, 1);
      }
      weeks.push(
        <View key={date.toString()} className="flex flex-row">
          {days}
        </View>
      );
    }

    return <View>{weeks}</View>;
  };

  return (
    <View className='p-4'>
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDays()}
    </View>
  );
};

export default Calendar;