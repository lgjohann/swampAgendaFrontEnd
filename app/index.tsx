import CircleButton from "@/components/CircleButton";
import Cliente from "@/components/Cliente";
import { Link } from "expo-router";
import { SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ClienteDATA = [
  {
    id: 0,
    name: "Lucas Hernandes",
    date: "20/09/2024",
    horario: "18:30",
    descricao: "Retoque de tattoo.",
  },
  {
    id: 1,
    name: "Joaninha",
    date: "23/09/2024",
    horario: "14:25",
    descricao: "Tattoo no pescoço (coraje)",
  },
  {
    id: 2,
    name: "Goody",
    date: "20/09/2024",
    horario: "12:00",
    descricao: "Tattoo transparente. (Pra variar)",
  },
  {
    id: 3,
    name: "Fulaninho",
    date: "27/09/2024",
    horario: "09:00",
    descricao: "Uma caveira muito doida na costela memo....",
  },
];

// Função para converter string da API para objeto Date
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day); // Mês baseado em zero
};

const formatData = (data) => {
  const today = new Date();

  // Agrupa os itens por data
  const groupedData = data.reduce((acc, item) => {
    const found = acc.find((group) => group.date === item.date);

    if (found) {
      found.data.push(item);
    } else {
      acc.push({
        date: item.date,
        data: [item],
        dateObject: parseDate(item.date),
      });
    }

    return acc;
  }, []);

  // Ordena os horários em cada grupo
  groupedData.forEach((group) => {
    group.data.sort((a, b) => {
      const [hoursA, minutesA] = a.horario.split(":").map(Number);
      const [hoursB, minutesB] = b.horario.split(":").map(Number);
      return hoursA - hoursB || minutesA - minutesB;
    });

    // Verifica se a data é igual a hoje e substitui por "Hoje"
    if (
      today.getDate() === group.dateObject.getDate() &&
      today.getMonth() === group.dateObject.getMonth() &&
      today.getFullYear() === group.dateObject.getFullYear()
    ) {
      group.date = "Hoje";
    }
  });

  // Ordena os grupos de data pela data mais próxima
  groupedData.sort((a, b) => a.dateObject - b.dateObject);

  return groupedData;
};

const formattedData = formatData(ClienteDATA);
const today = new Date();



export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background text-white">
      <SectionList 
        sections={formattedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Cliente 
            id={item.id}
            name={item.name}
            descricao={item.descricao}
            horario={item.horario}
          />
        )}
        renderSectionHeader={({section: {date}}) => (
          <Text className="text-4xl text-white mt-4">{date}</Text>
        )}
        contentContainerStyle="items-center justify-center w-full h-full"
      />
      <View className="absolute bottom-5 right-5">
        <CircleButton/>
      </View>
    </SafeAreaView>
  );
}


