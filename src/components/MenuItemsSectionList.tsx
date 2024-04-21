import React from 'react';
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';

interface MenuItem {
    title: string;
    data: {
        name: string;
        price: string;
    }[];
}

const menuItemsToDisplay: MenuItem[] = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' }
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' }
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' }
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' }
        ],
    }
];

const Item = ({ name, price }: { name: string; price: string }) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);

const MenuItemsSectionList = () => {
    const renderItem = ({ item }: { item: { name: string; price: string } }) => (
        <Item name={item.name} price={item.price} />
    );

    const renderSectionHeader = ({ section: { title } }: { section: MenuItem }) => (
        <View style={menuStyles.headerStyle}>
            <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
    );

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
                    <SectionList
                    sections={menuItemsToDisplay}
                    keyExtractor={(item: { name: string }, index: number) => item.name.toString() + index}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
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
    headerStyle: {
        backgroundColor: '#F4CE14',
    },
    sectionHeader: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
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

export default MenuItemsSectionList;