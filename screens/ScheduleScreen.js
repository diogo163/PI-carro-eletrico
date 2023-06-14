import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native'
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import 'moment/locale/pt-br'
import { Avatar, Card, IconButton } from 'react-native-paper';
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { Alert } from 'react-native';


moment.locale('pt-br')
const { width } = Dimensions.get('window');

const handleAgendarPress = () => {
  Alert.alert('Agendamento concluído');
};

export default function ScheduleScreen() {

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardPress = (card) => {
    setSelectedCard(card);
  };

  const navigation = useNavigation();  
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);


  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
        
        <TouchableOpacity onPress={()=>navigation.goBack()}><ArrowLeftIcon style={{marginTop:15}} size="20" color="black"/></TouchableOpacity>
          <Text style={styles.title}>Calendário</Text>
        </View>

        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: '#111',
                            borderColor: '#111',
                          },
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
          <Text style={styles.subtitle}>{value.toLocaleDateString('pt-br')}</Text>
          
            
      <ScrollView contentContainerStyle={styles.kk}>
      <TouchableWithoutFeedback onPress={() => handleCardPress(1)}>
      <Card style={[styles.card, selectedCard === 1 && styles.selectedCard]}>
        <Card.Content>
          <Card.Title
            title="Selecionar horário"
            subtitle="8:00"
          />
        </Card.Content>
      </Card>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleCardPress(2)}>
      <Card style={[styles.card, selectedCard === 2 && styles.selectedCard]}>
        <Card.Content>
          <Card.Title
            title="Selecionar horário"
            subtitle="10:00"
          />
        </Card.Content>
      </Card>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleCardPress(3)}>
      <Card style={[styles.card, selectedCard === 3 && styles.selectedCard]}>
        <Card.Content>
          <Card.Title
            title="Selecionar horário"
            subtitle="12:00"
          />
        </Card.Content>
      </Card>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleCardPress(4)}>
      <Card style={[styles.card, selectedCard === 4 && styles.selectedCard]}>
        <Card.Content>
          <Card.Title
            title="Selecionar horário"
            subtitle="14:00"
          />
        </Card.Content>
      </Card>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleCardPress(5)}>
      <Card style={[styles.card, selectedCard === 5 && styles.selectedCard]}>
        <Card.Content>
          <Card.Title
            title="Selecionar horário"
            subtitle="16:00"
          />
        </Card.Content>
      </Card>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleCardPress(6)}>
      <Card style={[styles.card, selectedCard === 6 && styles.selectedCard]}>
        <Card.Content>
          <Card.Title
            title="Selecionar horário"
            subtitle="18:00"
          />
        </Card.Content>
      </Card>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleCardPress(7)}>
      <Card style={[styles.card, selectedCard === 7 && styles.selectedCard]}>
        <Card.Content>
          <Card.Title
            title="Selecionar horário"
            subtitle="20:00"
          />
        </Card.Content>
      </Card>
      </TouchableWithoutFeedback>

    </ScrollView>
    </View>

        <View style={styles.footer}>
        <TouchableOpacity onPress={handleAgendarPress}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Agendar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
    alignSelf:'flex-end',
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#999999',
    marginBottom: 12,
  },
  header: {
    paddingHorizontal: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 16,
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#737373',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
  cardTitle: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 10,
  },
  card: {
    marginBottom: 16,
  },
  kk:{
    padding:12,
  },
  selectedCard: {
    backgroundColor: '#e5e5e5',
  },
});