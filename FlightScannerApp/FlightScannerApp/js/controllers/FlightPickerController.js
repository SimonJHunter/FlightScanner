app.controller('FlightPickerController', ['$scope', function($scope){

    $scope.title = 'Your possible flight options';
    $scope.flights = [
        {
            origin: 'Edinburgh',
            destination: 'Paris',
            airline: 'BA',
            deptime: new Date('2016', '05', '01', '07', '25'),
            arrtime: new Date('2016', '05', '01', '09', '25'),
            price: 140
        },
        {
            origin: 'Edinburgh',
            destination: 'New York',
            airline: 'Continental',
            deptime: new Date('2016', '05', '01', '10', '40'),
            arrtime: new Date('2016', '05', '01', '15', '00'),
            price: 450
        },
        {
            origin: 'Edinburgh',
            destination: 'Palma',
            airline: 'easyJet',
            deptime: new Date('2016', '05', '01', '09', '05'),
            arrtime: new Date('2016', '05', '01', '12', '25'),
            price: 205
        }
        ]
}]);

