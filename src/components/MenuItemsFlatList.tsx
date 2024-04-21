import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

interface MenuItem {
    name: string;
    price: string;
    id: string;
}

const menuItemsToDisplay: MenuItem[] = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
];

const Item = ({ name, price }: MenuItem) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);

const MenuItemsFlatList = () => {
    const renderItem = ({ item }: { item: MenuItem }) => <Item name={item.name} price={item.price} id={item.id} />;
    
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <View style={menuStyles.container}>
            {showMenu === true ? 
                <>
                    <Pressable
                        style={menuStyles.button}
                        onPress={() => {
                            setShowMenu(!showMenu);
                        }}
                    >
                        <Text style={menuStyles.buttonText}>
                            {showMenu ? 'Hide' : 'Show Menu'}
                        </Text>
                    </Pressable>
                    <FlatList
                    data={menuItemsToDisplay}
                    keyExtractor={(item: MenuItem) => item.id}
                    renderItem={renderItem}
                    />
                </>
                :
                <Pressable
                    style={menuStyles.button}
                    onPress={() => {
                        setShowMenu(!showMenu);
                    }}
                >
                    <Text style={menuStyles.buttonText}>
                        {showMenu ? 'Hide' : 'Show Menu'}
                    </Text>
                </Pressable>
            }
        </View>
    );
};

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 20,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 1,
        borderRadius: 50
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
});

export default MenuItemsFlatList;